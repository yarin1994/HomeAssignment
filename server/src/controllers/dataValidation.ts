interface Client {
  id: number;
  fullName: string;
  phoneNumber: string;
  ipAddress: string;
  emailAddress: string;
}

export const validateIPaddress = (ipaddress: string): boolean => {
  // regex to match IPv4 address
  const ipv4Pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // regex to match IPv6 address
  const ipv6Pattern = /^(([\da-fA-F]{1,4}:){7,7}[\da-fA-F]{1,4}|([\da-fA-F]{1,4}:){1,7}:|([\da-fA-F]{1,4}:){1,6}:[\da-fA-F]{1,4}|([\da-fA-F]{1,4}:){1,5}(:[\da-fA-F]{1,4}){1,2}|([\da-fA-F]{1,4}:){1,4}(:[\da-fA-F]{1,4}){1,3}|([\da-fA-F]{1,4}:){1,3}(:[\da-fA-F]{1,4}){1,4}|([\da-fA-F]{1,4}:){1,2}(:[\da-fA-F]{1,4}){1,5}|[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,6})|:((:[\da-fA-F]{1,4}){1,7}|:)|fe80:(:[\da-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([\da-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;

  // regex to match IPv4 address
  // console.log('ip', ipv4Pattern.test(ipaddress) || ipv6Pattern.test(ipaddress));
  return ipv4Pattern.test(ipaddress) || ipv6Pattern.test(ipaddress);
};
export const validateFullName = (fullName: string): boolean => {
  // Name will not be empty. must conaint letter, hyphenes and apostrophes.
  const namePattern = /^[A-Za-z\s'-]+$/;

  const maxLength = 100;

  // console.log(
  //   'name',
  //   namePattern.test(fullName.trim()) && fullName.length <= maxLength
  // );
  return namePattern.test(fullName.trim()) && fullName.length <= maxLength;
};

export const validateID = (id: number): boolean => {
  // regex to match a 9-digit positive integer as in israeli ID.
  const idPattern = /^\d{9}$/;
  // console.log('id', idPattern.test(String(id)));
  return idPattern.test(String(id));
};

export const validatePhoneNumber = (phone: string): boolean => {
  // regex to match an Israeli phone number (starts with 05... or with +972...)
  const phonePattern = /^((0[234589]{1}[0-9]{1})-{0,1}[0-9]{7}|(\+972[234589]{1}[0-9]{1})-{0,1}[0-9]{7})$/;

  // console.log('phone', phonePattern.test(phone));
  return phonePattern.test(phone);
};

export const validateEmail = (email: string): boolean => {
  // regex for basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // console.log('email', emailPattern.test(email));
  return emailPattern.test(email);
};

export const validateClient = (client: Client): boolean => {
  // returns true only if all of the validations are OK.
  // console.log(`client`, client);
  return (
    validateID(client.id) &&
    validateFullName(client.fullName) &&
    validatePhoneNumber(client.phoneNumber) &&
    validateIPaddress(client.ipAddress) &&
    validateEmail(client.emailAddress)
  );
};
