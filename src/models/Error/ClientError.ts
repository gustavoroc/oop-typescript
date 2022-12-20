export class ClientError extends Error {
  constructor(message: string, private statusCode: number) {
    super(message);
  }
}
