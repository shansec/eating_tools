interface User {
  admin: boolean,
}

interface DB {
  filterUser(filter: (this: User) => boolean): User[]
}

const db: DB = {
  filterUser: (filter: (this: User) => boolean) => {
    let user1: User = {
      admin: true
    }
    let user2: User = {
      admin: false
    }
    return [user1, user2]
  }
}

const admin = db.filterUser(function (this: User) {
  return this.admin
})

console.log(admin);
