// Validate IP address format
export const isIPValid = (ipAddress: string) => {
  // Regular expression to validate IP address format
  const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  return ipRegex.test(ipAddress);
};

// Validate Full Name (non-empty)
export const isFullNameValid = (fullName: string) => {
  return fullName.trim() !== '';
};

// Validate Israeli ID number (Teudat Zehut)
export const isIsraeliIDValid = (idNumber: string) => {
  // Regular expression to validate Israeli ID number format
  const idRegex = /^\d{9}$/;
  return idRegex.test(idNumber);
};

// Validate email format
export const isEmailValid = (email: string) => {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isIsraeliPhoneNumberValid = (phoneNumber: string) => {
  // Regular expression to validate Israeli phone number format
  const phoneRegex = /^(\+972|05)[-\s]?\d{1,2}[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
  return phoneRegex.test(phoneNumber);
};
