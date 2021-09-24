import React from "react";
//import { useState } from "react";
import signLanguageImages from "./SignLanguageImages";

// change input into array of image paths
const TranslateToSignLanguage = (input) => {

    if(input === '')return '';
    //const alphabets = /[a-z\s]/;
    let letters = input.data.toString().toLowerCase().split('');
    const signLanguageSentence = [];

    /*for (let i = 0; i < letters.length; i++) {
        if(!alphabets.test(letters[i])){
            return 'Only letters from a-z are accepted'
        }
    }*/

    for (let i = 0; i < letters.length; i++) {
        switch (letters[i]) {
            case 'a':
                signLanguageSentence.push(signLanguageImages.a)
                break;
            case 'b':
                signLanguageSentence.push(signLanguageImages.b)
                break;
            case 'c':
                signLanguageSentence.push(signLanguageImages.c)
                break;
            case 'd':
                signLanguageSentence.push(signLanguageImages.d)
                break;
            case 'e':
                signLanguageSentence.push(signLanguageImages.e)
                break;
            case 'f':
                signLanguageSentence.push(signLanguageImages.f)
                break;
            case 'g':
                signLanguageSentence.push(signLanguageImages.g)
                break;
            case 'h':
                signLanguageSentence.push(signLanguageImages.h)
                break;
            case 'i':
                signLanguageSentence.push(signLanguageImages.i)
                break;
            case 'j':
                signLanguageSentence.push(signLanguageImages.j)
                break;
            case 'k':
                signLanguageSentence.push(signLanguageImages.k)
                break;
            case 'l':
                signLanguageSentence.push(signLanguageImages.l)
                break;
            case 'm':
                signLanguageSentence.push(signLanguageImages.m)
                break;
            case 'n':
                signLanguageSentence.push(signLanguageImages.n)
                break;
            case 'o':
                signLanguageSentence.push(signLanguageImages.o)
                break;
            case 'p':
                signLanguageSentence.push(signLanguageImages.p)
                break;
            case 'q':
                signLanguageSentence.push(signLanguageImages.q)
                break;
            case 'r':
                signLanguageSentence.push(signLanguageImages.r)
                break;
            case 's':
                signLanguageSentence.push(signLanguageImages.s)
                break;
            case 't':
                signLanguageSentence.push(signLanguageImages.t)
                break;
            case 'u':
                signLanguageSentence.push(signLanguageImages.u)
                break;
            case 'v':
                signLanguageSentence.push(signLanguageImages.v)
                break;
            case 'w':
                signLanguageSentence.push(signLanguageImages.w)
                break;
            case 'x':
                signLanguageSentence.push(signLanguageImages.x)
                break;
            case 'y':
                signLanguageSentence.push(signLanguageImages.y)
                break;
            case 'z':
                signLanguageSentence.push(signLanguageImages.z)
                break;
            default:
                break;
        }
    }

    return(
        <>
        { signLanguageSentence.map((currElement, index) => <img key={index} src={currElement} alt="SignLanguage" />)}
        </>
    )
}

export default TranslateToSignLanguage

