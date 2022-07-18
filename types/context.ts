import { Context as ContextTelegraf } from 'telegraf';

export type Context = ContextTelegraf & {
  session: {
    type?: 'create' | 'done' | 'edit' | 'remove';
  };
};
