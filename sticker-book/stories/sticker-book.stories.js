import { html } from 'lit';
import '../src/sticker-book.js';

export default {
  title: 'StickerBook',
  component: 'sticker-book',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <sticker-book
      style="--sticker-book-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </sticker-book>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
