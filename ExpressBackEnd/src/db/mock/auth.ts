export class AuthModelMock {
    public async getUser (email: string) {
        return {
            id: 'Mock Id',
            email: 'Mock L',
            firstName: 'Mock F',
            lastName: 'Mock L',
            passwordHash: '043a718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89'
        }
    }
}