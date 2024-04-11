class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep
  }

  isDirectory(): this is Directory {
    return this instanceof Directory
  }

  isNetWorked(): this is Networked & this {
    return this.networked
  }

  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false)
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[]
  constructor() {
    super('', false)
    this.children = []
  }
}

interface Networked {
  host: string
}