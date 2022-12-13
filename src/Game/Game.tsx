import { useGameData } from "../GameDataProvider/GameDataProvider"

export const Game: React.FC = () => {
    const gameData = useGameData()
    console.log("gamedata", gameData)
    return (
        <>
            {gameData.logFileFound ? (
                <>
                    {gameData.rawGameData.game_state === "Closed" ? (
                        <>Game Closed</>
                    ) : (
                        <>
                            {gameData.rawGameData.game_state === "Menu" ? (
                                <>Game Menu</>
                            ) : (
                                <>
                                    {gameData.rawGameData.game_state ===
                                    "Loading" ? (
                                        <>Loading Into Game</>
                                    ) : (
                                        <>In Game</>
                                    )}
                                </>
                            )}
                        </>
                    )}
                    {gameData.rawGameData.timestamp.length > 0 ? (
                        <>
                            Map: {gameData.rawGameData.map}
                            Duration: {gameData.rawGameData.duration} Seconds
                        </>
                    ) : null}
                </>
            ) : (
                <>Could not find Log File</>
            )}
        </>
    )
}
