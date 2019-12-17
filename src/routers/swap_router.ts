import * as express from 'express';
import * as asyncHandler from 'express-async-handler';

import { SwapHandlers } from '../handlers/swap_handlers';
import { SwapService } from '../services/swap_service';

export const createSwapRouter = (swapService: SwapService): express.Router => {
    const router = express.Router();
    const handlers = new SwapHandlers(swapService);
    router.get('/quote', asyncHandler(handlers.getSwapQuoteAsync.bind(handlers)));
    return router;
};