"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateClient = exports.validateEmail = exports.validatePhoneNumber = exports.validateID = exports.validateFullName = exports.validateIPaddress = void 0;
const validateIPaddress = (ipaddress) => {
    // regex to match IPv4 address
    const ipv4Pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    // regex to match IPv6 address
    const ipv6Pattern = /^(([\da-fA-F]{1,4}:){7,7}[\da-fA-F]{1,4}|([\da-fA-F]{1,4}:){1,7}:|([\da-fA-F]{1,4}:){1,6}:[\da-fA-F]{1,4}|([\da-fA-F]{1,4}:){1,5}(:[\da-fA-F]{1,4}){1,2}|([\da-fA-F]{1,4}:){1,4}(:[\da-fA-F]{1,4}){1,3}|([\da-fA-F]{1,4}:){1,3}(:[\da-fA-F]{1,4}){1,4}|([\da-fA-F]{1,4}:){1,2}(:[\da-fA-F]{1,4}){1,5}|[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,6})|:((:[\da-fA-F]{1,4}){1,7}|:)|fe80:(:[\da-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([\da-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    // regex to match IPv4 address
    // console.log('ip', ipv4Pattern.test(ipaddress) || ipv6Pattern.test(ipaddress));
    return ipv4Pattern.test(ipaddress) || ipv6Pattern.test(ipaddress);
};
exports.validateIPaddress = validateIPaddress;
const validateFullName = (fullName) => {
    // Name will not be empty. must conaint letter, hyphenes and apostrophes.
    const namePattern = /^[A-Za-z\s'-]+$/;
    const maxLength = 100;
    // console.log(
    //   'name',
    //   namePattern.test(fullName.trim()) && fullName.length <= maxLength
    // );
    return namePattern.test(fullName.trim()) && fullName.length <= maxLength;
};
exports.validateFullName = validateFullName;
const validateID = (id) => {
    // regex to match a 9-digit positive integer as in israeli ID.
    const idPattern = /^\d{9}$/;
    // console.log('id', idPattern.test(String(id)));
    return idPattern.test(String(id));
};
exports.validateID = validateID;
const validatePhoneNumber = (phone) => {
    // regex to match an Israeli phone number (starts with 05... or with +972...)
    const phonePattern = /^((0[234589]{1}[0-9]{1})-{0,1}[0-9]{7}|(\+972[234589]{1}[0-9]{1})-{0,1}[0-9]{7})$/;
    // console.log('phone', phonePattern.test(phone));
    return phonePattern.test(phone);
};
exports.validatePhoneNumber = validatePhoneNumber;
const validateEmail = (email) => {
    // regex for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log('email', emailPattern.test(email));
    return emailPattern.test(email);
};
exports.validateEmail = validateEmail;
const validateClient = (client) => {
    // returns true only if all of the validations are OK.
    // console.log(`client`, client);
    return ((0, exports.validateID)(client.id) &&
        (0, exports.validateFullName)(client.fullName) &&
        (0, exports.validatePhoneNumber)(client.phoneNumber) &&
        (0, exports.validateIPaddress)(client.ipAddress) &&
        (0, exports.validateEmail)(client.emailAddress));
};
exports.validateClient = validateClient;
//# sourceMappingURL=dataValidation.js.map