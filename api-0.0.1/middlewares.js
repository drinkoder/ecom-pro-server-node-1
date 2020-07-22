const { _Account } = require('../utils/shemas');
const { isMatchInArrays } = require('../utils/functions');

// exports.isAuthMiddleware = (id, validRoles) => {
//   return async (req, res, next) => {
//     let isOkay;
//     try {
//       // cheking account
//       account = await _Account.findById(id);
//       if (account == null) {
//         return res.status(404).json({ message: 'Cannot find Account' });
//       }
//       // checking roles
//       const needsPermission = validRoles && validRoles.length > 0;

//       if (needsPermission) {
//         roles = account.roles;
//         console.log(roles);
//         const isAuthorized = isMatchInArrays(validRoles, roles);
//         if (!isAuthorized) {
//           return res.status(404).json({ message: 'UnAuthorized' });
//         }
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message });
//     }
//     res.isOkay = isOkay;
//     next();
//   };
// };

exports.checkToken = () => {
  return async (req, res, next) => {
    let account;
    try {
      // grabing token from localStorage/cookies
      // checking token from database
      // error = if no token
      // error = if no user match
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.account = account;
    next();
  };
};
exports.checkAuthorizations = (requirements, roles) => {
  return async (req, res, next) => {
    let isAuthorized;
    const freshRoles = null;
    const permissions = res.account.roles || roles || freshRoles;
    try {
      const noRolesArray = !permissions;
      const emptyRolesArray = permissions && permissions.length < 1;
      if (noRolesArray || emptyRolesArray) {
        return res.status(500).json({ message: 'unAuthorized (no roles in db)' });
      }
      const rolesMatch = isMatchInArrays(requirements, permissions);
      if (!rolesMatch) {
        return res.status(500).json({ message: 'unAuthorized (no roles match)' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.isAuthorized = isAuthorized;
    next();
  };
};
