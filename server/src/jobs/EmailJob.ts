import {Job, Queue,Worker} from 'bullmq';
import {redisConnection,jobOptions} from '../config/queue.js';
import {sendEmail} from '../config/mail.js';

interface EmailJobData{
    to:string;
    subject:string;
    body:string;
}

export const emailQueueName='email-queue';

export const emailQueue=new Queue(
    emailQueueName,
    {
        connection:redisConnection,
        defaultJobOptions:jobOptions,
});

export const emailWorker=new Worker(
    emailQueueName,
    async (job:Job)=>{
        const {to,subject,body}:EmailJobData = job.data;
        return sendEmail(to,subject,body);
    },
    {
        connection:redisConnection,
    }
);