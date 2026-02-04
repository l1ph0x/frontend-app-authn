import { messages as paragonMessages } from '@openedx/paragon';
import frMessages from './messages/fr.json';
import es419Messages from './messages/es_419.json';
import ruMessages from './messages/ru.json';
import kaMessages from './messages/ka.json';

const appMessages = {
  fr: frMessages,
  'es-419': es419Messages,
  ru: ruMessages,
  ka: kaMessages,
};

export default [
  paragonMessages,
  appMessages,
];
