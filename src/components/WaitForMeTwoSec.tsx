import React from "react";
import wrapPromise from "../utils/wrapPromise";

/**
 * Goal: Combine loading, success & error
 * Notes:
 * We do something we usually wouldn't. We take the promise out of the component.
 * This means only one Promise exists and we use it for multiple re-renders.
 *
 * Success Case:
 * Module is loaded        -> create Promise waitPromise
 * render WaitForMeTwoSec  -> run loadTwoSec
 * status === "pending"    -> throw waitPromise
 * waitPromise resolves    -> Parent Suspense component triggeres a re-render
 * render WaitForMeTwoSec  -> run loadTwoSec
 * status === "success"    -> return "Yay"
 *
 * Error Case:
 * Module is loaded        -> create Promise waitPromise
 * render WaitForMeTwoSec  -> run loadTwoSec
 * status === "pending"    -> throw waitPromise
 * waitPromise rejects     -> Parent Suspense component triggeres a re-render
 * render WaitForMeTwoSec  -> run loadTwoSec
 * status === "error"      -> throw Error
 */

const waitPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    // status = "error";
    // reject();
  }, 2000);
});

const resource = wrapPromise(waitPromise.then(() => "Yay"));

const WaitForMeTwoSec = () => {
  return <div>{resource.read()}</div>;
};

export default WaitForMeTwoSec;
