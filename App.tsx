import React, {useEffect} from 'react';
import Routes from './src/routes';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

import {
  Jost_400Regular,
  Jost_600SemiBold, useFonts
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;

        console.log(data);
      }
    );

    return () => subscription.remove();

    // async function notificationsDelete(){
    //   await Notifications.cancelAllScheduledNotificationsAsync();

    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log('####### notificações agendadas #######')
    //   console.log(data)
    // }

    // notificationsDelete()

  },[]);

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <Routes />
  )
}