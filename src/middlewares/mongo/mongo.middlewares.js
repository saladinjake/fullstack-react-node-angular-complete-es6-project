import { verifyToken, verifyAdminToken } from './core/auth.middleware';
import { AuthSanitizer } from './core/auth.sanitizer.middleware';

const Middleware = {
  verifyToken,
  verifyAdminToken,
  AuthSanitizer
}


export default Middleware;
