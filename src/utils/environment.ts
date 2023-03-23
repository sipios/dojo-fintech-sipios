interface Environment {
    playerToken: string;
    host: string;
}

const environmentVariables = import.meta.env;

const loadEnvironment = (): Environment => ({
    host: environmentVariables.VITE_GAME_HOST,
    playerToken: environmentVariables.VITE_PLAYER_TOKEN
});

export const environment = loadEnvironment();