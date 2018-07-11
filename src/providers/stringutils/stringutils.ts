
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

@Plugin(
  {
    pluginName: "PlugmanStringUtils",
    plugin: "plugman-stringutils",
    pluginRef: "PlugmanStringUtils",
    platforms: ["Android", "iOS"],
    repo: "https://github.com/ashwindmk/plugman_stringutils.git"
  }
)

@Injectable()
export class StringutilsProvider extends IonicNativePlugin {

  @Cordova()
  test(): Promise<any> {
    return;
  }

  @Cordova()
  isBlank(arg1: any): Promise<any> {
    return;
  }

  @Cordova()
  isEmpty(arg1: any): Promise<any> {
    return;
  }

}
