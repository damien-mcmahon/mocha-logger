// Type definitions for Mocha Logger
// Project: Mocha Logger
// Definitions by: Damien McMahon https://macoto.co.uk
import 'mocha-logger';

declare class mocha {
  pending(): void;

  success(): void;

  error(): void;

  log():void;
}
