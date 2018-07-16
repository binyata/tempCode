// import { User, Client } from 'models/models';
// import { Util } from 'modules/utilities';

export class ImmutableState {
  constructor() {
    throw new Error('Don\'t use new, or ninjas will kill you while you sleep.');
  }

  static keys = {
    clientColors: 'setup-ocr-client-colors',
    subscriptions: 'setup-ocr-subscriptions',
    catalogAttributes: 'setup-ocr-catalog-attributes',
    promoTypes: 'setup-ocr-promo-types',
    user: 'setup-ocr-user',
    admin: 'setup-ocr-admin',
    adminClient: 'setup-ocr-admin-client',
    client: 'setup-ocr-client',
    apiKeys: 'setup-ocr-tokens',
    jwts: 'setup-ocr-jwts'
  };

  static set(stateObj = {}) {
    window.localStorage.clear();

    const keys = Object.keys(stateObj);

    function setKey(key, value) {
      if (value !== null && value !== undefined) {
        window.localStorage.setItem(ImmutableState.keys[key], JSON.stringify(value));
      }
    }

    keys.forEach(key => setKey(key, stateObj[key]));
    return ImmutableState.get();
  }

  static get() {
    return Object.keys(ImmutableState.keys).reduce((copy, key) => {
      const val = ImmutableState.getKey(key);
      if (val) {
        copy[key] = val;
      }

      return copy;
    }, {});
  }

  // static getKey(key) {
  //   return Util.fromNullable(window.localStorage.getItem(ImmutableState.keys[key]))
  //     .chain(val => Util.tryCatch(() => JSON.parse(val)))
  //     .map(x => {
  //       if (key === 'user' || key === 'admin') {
  //         return new User(x);
  //       } else if (key === 'client') {
  //         return new Client(x);
  //       } else {
  //         return x;
  //       }
  //     })
  //     .cata(e => {
  //       // if (e instanceof SyntaxError) {
  //       //   // If the value isn't null, but it still failed, it means something went
  //       //   // wrong when parsing the json. So they are in a bad state.
  //       //   Container.instance.viewModel.eventAggregator.publish('logout');
  //       // }
  //       return e;
  //     }, x => x);
  // }

  static user() {
    return ImmutableState.getKey('user') || {};
  }

  static client() {
    return ImmutableState.getKey('client') || {};
  }

  static admin() {
    return ImmutableState.getKey('admin') || {};
  }

  static adminClient() {
    return ImmutableState.getKey('adminClient') || {};
  }

  static subscriptions() {
    return ImmutableState.getKey('subscriptions') || [];
  }

  static clientColors() {
    return ImmutableState.getKey('clientColors') || [];
  }

  static promoTypes() {
    return ImmutableState.getKey('promoTypes') || [];
  }

  static catalogAttributes() {
    return ImmutableState.getKey('catalogAttributes') || [];
  }

  static jwts() {
    return ImmutableState.getKey('jwts') || {};
  }

  static apiKeys() {
    return ImmutableState.getKey('apiKeys') || {};
  }

  static isLoggedIn() {
    return ImmutableState.admin().requirementsMet === true;
  }
}
