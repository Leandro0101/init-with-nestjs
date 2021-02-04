import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { TasksController } from './controllers/tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/Task';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}
