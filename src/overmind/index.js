import {
    createStateHook,
    createActionsHook,
    createEffectsHook,
    createReactionHook,
} from 'overmind-react';
import { merge, namespaced } from 'overmind/config';
import state from './state';
import * as trails from './trails';
import * as routes from './routes';
import * as locations from './locations';
import * as reviews from './reviews';

export const config = merge(
    {
        state,
    },
    namespaced({
        trails,
        routes,
        locations,
        reviews,
    }),
);

export const useAppState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
