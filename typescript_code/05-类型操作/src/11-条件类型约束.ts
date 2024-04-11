type MessageOf<T> = T extends { message: unknown } ? T['message'] : never

interface Email {
  message: string
}

interface Dog {
  bark(): void
}

type EmailMessageContents = MessageOf<Email>;

// let content: EmailMessageContents = '123'

type DogMessageContents = MessageOf<Dog>
