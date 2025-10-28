import { Queue, Worker } from 'bullmq';
import { redisConnection, jobOptions } from '../config/queue.js';
import { sendEmail } from '../config/mail.js';
export const emailQueueName = 'email-queue';
export const emailQueue = new Queue(emailQueueName, {
    connection: redisConnection,
    defaultJobOptions: jobOptions,
});
export const emailWorker = new Worker(emailQueueName, async (job) => {
    const { to, subject, body } = job.data;
    return sendEmail(to, subject, body);
}, {
    connection: redisConnection,
});
