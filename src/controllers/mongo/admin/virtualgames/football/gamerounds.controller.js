import Fixture from '../../../../../models/mongo/core/banners';
import Game from '../../../../../models/mongo/core/banners';
import Team from '../../../../../models/mongo/core/banners';
const ObjectId = require('mongoose').Types.ObjectId;

export class GameRoundsController{
   static async makeRounds(req,res){
      if ( //!req.user.roles.includes('Admin') ||
       !req.user.isAdmin) {
          return res.status(200).json({
            success: false,
            message: 'Only admins can create a match rounds!',
            data: {}
          })
        }
        let { round, betsAcceptedBy, games } = req.body;
        try {
          let fixture = await Fixture.findOne({ round: round });
          if (fixture.isCompleted) {
            return res.status(200).json({
              success: false,
              message: 'This round has already been completed',
              data: {}
            })
          }
          let gameIds = [];
          for (let gameNum in games) {
            let game = await new Game({
              homeTeamId: new ObjectId(games[gameNum].home_team_id.trim()),
              awayTeamId: new ObjectId(games[gameNum].away_team_id.trim())
            })
            .save();
            gameIds.push(game._id)
          }
          await Fixture
            .findByIdAndUpdate(fixture._id, {
              $set: {
                betsAcceptedBy: betsAcceptedBy,
                gameStats: gameIds,
                isActive: true
              }
            })
          return res.status(200).json({
            success: true,
            message: `Successfully set up games for round ${round}`,
            data: {}
          })
        } catch (err) {
          console.log(err)
          return res.status(500).json({
            success: false,
            message: err,
            data: {}
          })
        }
   }

   static async getActiveRounds(req,res){
     if ( //!req.user.roles.includes('Admin')
         !req.user.isAdmin
        ) {
          return res.status(401).json({
            success: false,
            message: 'Only admins can setup rounds!',
            data: {}
          });
        }
        let activeFixtures = await Fixture
          .find({ 'isActive': true })
          .populate({
            path: 'gameStats',
            model: 'Game',
            populate: {
              path: 'homeTeamId awayTeamId',
              model: 'Team'
            }
          });
        if (activeFixtures.length === 0) {
          return res.status(200).json({
            success: false,
            message: 'There are no active rounds, please set up a new round!',
            data: {}
          });
        }
        if (activeFixtures.length > 1) {
          return res.status(200).json({
            success: false,
            message: 'More than one active round, please contact your db admin!',
            data: {}
          });
        }
        return res.status(200).json({
          success: true,
          message: ``,
          data: activeFixtures[0]
        });
   }

   static async completedRounds(req,res) {
     if (//!req.user.roles.includes('Admin')
         !req.user.isAdmin
       ) {
        return res.status(200).json({
          success: false,
          message: 'Only admins can setup rounds!',
          data: {}
        });
      }

      const { fixtureId, games } = req.body;

      let fixture = await Fixture.findById(fixtureId);
      if (!fixture) {
        return res.status(200).json({
          success: false,
          message: 'No such fixture found',
          data: {}
        });
      }

      //update game scores
      for (let game of Object.values(games)) {
        await Game.findByIdAndUpdate(game.game_id, {
          $set: {
            homeTeamGoals: game.home_team_score,
            awayTeamGoals: game.away_team_score,
            sign: game.sign
          }
        })

        //update team stats
        let dbGame = await Game.findByIdAndUpdate(game.game_id);
        let homeTeamId = dbGame.homeTeamId;
        let awayTeamId = dbGame.awayTeamId;

        await TeamStats.update(
          { team: homeTeamId },
          {
            $inc: {
              gamesPlayed: 1,
              goalsScored: game.home_team_score,
              goalsConceded: game.away_team_score,
              points: getPoints(game.home_team_score - game.away_team_score),
              wins: (game.home_team_score - game.away_team_score > 0 ? 1 : 0),
              losses: (game.home_team_score - game.away_team_score < 0 ? 1 : 0),
              draws: (game.home_team_score - game.away_team_score == 0 ? 1 : 0)
            }
          })

        await TeamStats.update(
          { team: awayTeamId },
          {
            $inc: {
              gamesPlayed: 1,
              goalsScored: game.away_team_score,
              goalsConceded: game.home_team_score,
              points: getPoints(game.away_team_score - game.home_team_score),
              wins: (game.away_team_score - game.home_team_score > 0 ? 1 : 0),
              losses: (game.away_team_score - game.home_team_score < 0 ? 1 : 0),
              draws: (game.away_team_score - game.home_team_score == 0 ? 1 : 0)
            }
          })

        //update user stats
        let userBets = await UserBet.find({ gameId: game.game_id });
        let userIds = userBets.map(b => b.userId);

        for (let userId of userIds) {
          let userBet = userBets.filter(b => b.userId == userId)[0];

          let pointsEarned = 0;

          if (userBet.sign == game.sign) {
            pointsEarned = 1;
          }
          if (userBet.homeTeamGoals == game.home_team_score && userBet.awayTeamGoals == game.away_team_score) {
            pointsEarned = 3;
          }

          await User.findByIdAndUpdate(userId, {
            $inc: {
              points: pointsEarned,
              guessedSigns: pointsEarned >= 1 ? 1 : 0,
              guessedScores: pointsEarned == 3 ? 1 : 0
            }
          })
        }
      }

      //close round
      await Fixture.findByIdAndUpdate(fixtureId, {
        $set: {
          isActive: false,
          isCompleted: true
        }
      })

      function getPoints(balance) {
        if (balance > 0) {
          return 3;
        } else if (balance < 0) {
          return 0;
        } else {
          return 1;
        }
      }

      return res.status(200).json({
        success: true,
        message: `Success`,
        data: {}
      });

   }
}
