import React, { Component } from 'react'
import firebase from 'firebase'

function Firebase(){
    var firebaseConfig = {
        apiKey: "AIzaSyD8x3BTa3bjkA5sQF30EFIRPwIFYfm-HLA",
        authDomain: "bookmyshow-b7c22.firebaseapp.com",
        databaseURL: "https://bookmyshow-b7c22.firebaseio.com",
        projectId: "bookmyshow-b7c22",
        storageBucket: "bookmyshow-b7c22.appspot.com",
        messagingSenderId: "1007705672564",
        appId: "1:1007705672564:web:f702d35f194421a663fa21",
        measurementId: "G-ZMED93M1E9"
      };
    
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
}


export default Firebase
