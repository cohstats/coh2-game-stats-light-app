import React, { useContext } from "react"
import { GameData } from "./GameData"
import { useRawGameData } from "./useRawGameData"

const GameDataContext = React.createContext<GameData>({ logFileFound: false })
export const useGameData = () => useContext(GameDataContext)

export interface GameDataProviderProps {
    children?: React.ReactNode
}

export const GameDataProvider: React.FC<GameDataProviderProps> = ({
    children,
}) => {
    const { logFileFound, rawGameData } = useRawGameData()
    console.log("rawprovider", rawGameData)
    return (
        <>
            <GameDataContext.Provider
                value={
                    logFileFound && rawGameData
                        ? { logFileFound: true, rawGameData }
                        : { logFileFound: false }
                }
            >
                {children}
            </GameDataContext.Provider>
        </>
    )
}
