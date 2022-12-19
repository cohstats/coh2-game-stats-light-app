import { useGameData } from "./game-data-provider/GameDataProvider"
import { TestComponent } from "coh-stats-components"

export const Game: React.FC = () => {
    const gameData = useGameData()
    console.log("gamedata", gameData)
    return (
        <>
            <TestComponent color="blue">Hello World!</TestComponent>
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
                            <img
                                src={
                                    "/map-images/" +
                                    gameData.rawGameData.map +
                                    "_x300.webp"
                                }
                            />
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
