export const data = [
    { Username: 'tomsmith', Password: 'SuperSecretPassword!', Test_Scenario: 'Valid credentials' },
    { Username: 'tomsmith1', Password: 'SuperSecretPassword!', Test_Scenario: 'Invalid username' },
    { Username: 'tomsmith', Password: 'SuperSecretPwd', Test_Scenario: 'Invalid password' },
    { Username: '', Password: 'SuperSecretPassword!', Test_Scenario: 'Missing username' },
    { Username: 'tomsmith', Password: '', Test_Scenario: 'Missing password' },
    { Username: '', Password: '', Test_Scenario: 'Missing credentials' }
];