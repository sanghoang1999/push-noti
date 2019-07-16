const check = () => {
  if(!'serviceWoker' in navigator) {
    throw new Error('no sw');
  }
  if(!'PushManager' in navigator) {
    throw new Error('now pm')
  }
}


const registerServiceWorker = async() => {
  const swRegistration = await navigator.serviceWorker.register('service.js');
  return swRegistration;
}

const requestNotificationPermission = async () => {
  console.log('cc');
  const permission = await window.Notification.requestPermission();
  if( permission !== 'granted'){
    throw new Error('Permission not granted for Notification');
  }
  return permission;
}

const showLocalNotification =(title,body,swRegistration) => {
  const options=[
    {body:body}
  ]
  swRegistration.showNotification(title,options,swRegistration);
}


const main = async () => {
  check();
  const swRegistration = await registerServiceWorker();
  showLocalNotification('sang','emvuidi',swRegistration);

}

main();


var btn = document.querySelector('#btn');

btn.addEventListener('click',async ()=> {
  console.log('cc');
  const swRegistration = await requestNotificationPermission();
  console.log(swRegistration);
})