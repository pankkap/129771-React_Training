import { BUILD_CAKE, BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const buildCake = () => {
  return {
    type: BUILD_CAKE,
  };
};
