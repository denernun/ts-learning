namespace EnumType {
  const userType = {
    ADMIN: 'ADMIN',
    USER: 'USER',
  } as const;

  type UserType = (typeof userType)[keyof typeof userType];

  declare function checkUserType(userType: UserType): void;

  checkUserType(userType.ADMIN);
  checkUserType('ADMIN');
}
