import axios from 'axios'
import ImmutableState from 'utils/ImmutableState'
import {
  SETUP_OCR_CATALOG_ATTRIBUTES_REQUEST
  // SETUP_OCR_ADMIN,
  // SETUP_OCR_ADMIN_CLIENT,
  // SETUP_OCR_CATALOG_ATTRIBUTES,
  // SETUP_OCR_CLIENT,
  // SETUP_OCR_CLIENT_COLORS,
  // SETUP_OCR_JWTS,
  // SETUP_OCR_PROMO_TYPES,
  // SETUP_OCR_SUBSCRIPTIONS,
  // SETUP_OCR_TOKENS,
  // SETUP_OCR_USER,
} from './Types'
import store from 'store'

/**
NOTES
1. need user/admin permission logic to chooose api-key correctly
2. I don't understand why we have a separate new and old subscription api calls...
3. will most likely send all returned data to redux to be used throughout site
4. Figure out a way to run promos as a background process. Probably will work well with notification system
*/
export const dispatchCatalogInfo = (info) => dispatch => {dispatch({type: SETUP_OCR_CATALOG_ATTRIBUTES_REQUEST, payload: info})}
// export const dispatchCatalogInfo = (info) => dispatch => {dispatch({type: SETUP_OCR_CATALOG_ATTRIBUTES, payload: info})}
// export const dispatchColorInfo = (info) => dispatch => {dispatch({type: SETUP_OCR_CLIENT_COLORS, payload: info})}

export const loginAction = (user, pw) => {
  let data = {
        username: user,
        password: pw
      }
  let url = 'http://ocr-api.web:80/v2/user_auth/login'
  return axios.post(url, data)
}

export const generalStoreTask = (dataStorage) => {
  // Store User/admin info to local storage:
  storeClientUserToken(dataStorage).then(() => {
    // Store Subscription information
    storeSubscriptions()
    // Store Client Color Info
    storeClientColors()
    // Store Promo Info... will need to notify when done if it takes long

    // Store Catalog Info
    storeCatalogInfo()
  }).catch(error => {
    console.log(error)
  })
}

function updateDefaultHeaders(key) {
  switch(key) {
    case 'user':
      axios.defaults.headers.common['X-USER-UUID'] = JSON.parse(window.localStorage.getItem('setup-ocr-user')).uuid
      break
    case 'admin':
      axios.defaults.headers.common['X-ADMIN-UUID'] = JSON.parse(window.localStorage.getItem('setup-ocr-admin')).uuid
      break
    case 'jwts':
      axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(window.localStorage.getItem('setup-ocr-jwts')).admin}`
      break
    case 'tokens':
      axios.defaults.headers.common['X-API-KEY'] = JSON.parse(window.localStorage.getItem('setup-ocr-tokens')).admin
      break
    default: null
  }
}

const storeClientUserToken = async(dataStorage) => {
  window.localStorage.clear();
  let storage = dataStorage.data.data
  storage['tokens'] = dataStorage.data.tokens
  let keys = Object.keys(dataStorage.data.data)
  keys.tokens = 'tokens'

  function setKey(key, value) {
    console.log("looping")
    if (value !== null && value !== undefined) {
      let fullKeyName = `setup-ocr-${key}`
      window.localStorage.setItem(fullKeyName, JSON.stringify(value))
      if(key === 'user' || key === 'admin'
                        || key === 'jwts'
                        || key === 'tokens') {
        updateDefaultHeaders(key)
      }
    }
  }
  keys.forEach(key => setKey(key, storage[key]));
}

const storeSubscriptions = () => {
  let sendToLocalStorage = function(res) {
    if (localStorage.getItem("setup-ocr-subscriptions") === null) {
      window.localStorage.setItem("setup-ocr-subscriptions", JSON.stringify(res.data.data))
    } else {
      Array.prototype.push.apply(res.data.data, JSON.parse(window.localStorage.getItem("setup-ocr-subscriptions")))
      window.localStorage.setItem("setup-ocr-subscriptions", JSON.stringify(res.data.data))
    }
  }
  let clientUUID = JSON.parse(window.localStorage.getItem('setup-ocr-client')).uuid
  //let clientUUID = "53cfb3ca848c3"
  let url = `http://ocr-api.web:80/v4/admin/clients/${clientUUID}/subscriptions`
  axios.get(url).then( res => {
    console.log("returning subscriptions-v4")
    sendToLocalStorage(res)
  })

  let url2 = `http://ocr-api.web:80/v3/admin/client_subscriptions`
  const config2 = {
    params: {
      //client_uuid: "53cfb3ca848c3",
      client_uuid: JSON.parse(window.localStorage.getItem('setup-ocr-client')).uuid,
      user_uuid: JSON.parse(window.localStorage.getItem('setup-ocr-user')).uuid
    }
  }
  axios.get(url2, config2).then( res => {
    console.log("returning subscriptions-v3")
    sendToLocalStorage(res)
    // let faker = [{
    //   client_id:71,
    //   created_at:"2018-04-17 14:14:17",
    //   deleted_at:null,
    //   expiration_date:"2018-12-31",
    //   id:999999,
    //   name:"client_product_group",
    //   type:"amz_dash",
    //   updated_at:"2018-04-17 14:14:17",
    //   value:"fake_stuff"
    // }]
    // res.data.data = faker
  })
}

const storeClientColors = () => {
  let clientUUID = JSON.parse(window.localStorage.getItem('setup-ocr-client')).uuid
  let url = `http://ocr-api.web:80/v2/clients/${clientUUID}/client_prefs`
  axios.get(url).then(pref => {
    console.log("results of color prefs")
    let prefColors = pref.data.data.filter( function(el) {
      return el.name === 'client_colors'
    })
    window.localStorage.setItem("setup-ocr-client-colors", prefColors[0].value)
    //store.dispatch(dispatchColorInfo(JSON.parse(prefColors[0].value)))
  })
}

const storeCatalogInfo = () => {
  let clientUUID = JSON.parse(window.localStorage.getItem('setup-ocr-client')).uuid
  let url = `http://ocr-api.web:80/v2/clients/${clientUUID}/catalog_attributes`
  const config = {
    params: {
      client_uuid: JSON.parse(window.localStorage.getItem('setup-ocr-client')).uuid,
    }
  }
  axios.get(url).then(res => {
    window.localStorage.setItem("setup-ocr-catalog-attributes", JSON.stringify(res.data.data))
    store.dispatch(dispatchCatalogInfo(res.data.data))
  })
}

const storePromos = () => {
  // const clientUUID = ImmutableState.client().uuid;
  // const url = `/v2/clients/${clientUUID}/promo_types`;
  // return ManagePromoDatacontext.dc.get(url, params).then(({ data }) => data);
}

export const logout = () => {
  localStorage.clear();
}
