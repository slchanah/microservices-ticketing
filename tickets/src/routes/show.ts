import express, { Request, Response } from 'express';
import { NotFoundError } from '@microsrv-tickets/common';

import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    throw new NotFoundError();
  }

  res.status(200).send(ticket);
});

router.get('/api/tickets', async (req: Request, res: Response) => {
  const tickets = await Ticket.find({
    orderId: undefined,
  });

  res.send(tickets);
});

export { router as showTicketRouter };
