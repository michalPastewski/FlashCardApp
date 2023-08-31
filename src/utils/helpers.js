export function profileSignatureGenerator(user) {
   const userName = user.email.split('@').slice(0, 1);
   const selectedUserIdDigital = user.uid.slice(-6);
 
   return `${userName}-${selectedUserIdDigital}`;
 }