import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import config from './config/config';
import Controller from './interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  /**
   *
   */
  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  /**
   *
   * @param controllers
   */
  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private connectToTheDatabase() {
    const connectionString = config.getDBURL();
    mongoose.connect(`mongodb://${connectionString}`, { useNewUrlParser: true })
      .then(connection => console.log('MongoDB connected'))
      .catch((error) => { throw error; });
  }
}

export default App;
