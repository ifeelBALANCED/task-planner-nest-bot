import { Markup } from 'telegraf';

export const actionButtons = () =>
  Markup.keyboard(
    [
      Markup.button.callback('📝 Task List', 'list'),
      Markup.button.callback('✅ Complete task️', 'done'),
      Markup.button.callback('✏ Edit task️', 'edit'),
      Markup.button.callback('❌ Delete task', 'delete'),
    ],
    { columns: 2 },
  );
