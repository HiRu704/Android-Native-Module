package com.nativemodule;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class CalenderModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext reactContext;

    public CalenderModule(ReactApplicationContext reactContext) {
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CalenderModule";
    }

    @ReactMethod
    public void Addition(int num) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("Success", String.valueOf(num + 100));
        Log.d("Android log", "the number is " + num );
    }

    @ReactMethod
    public void Log(String name) {
        Log.d("android log", "my name is " + name);
    }

}
