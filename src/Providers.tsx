import { MantineProvider } from "@mantine/core"
import { GameDataProvider } from "./game-data-provider/GameDataProvider"

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => (
    <>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <GameDataProvider>{children}</GameDataProvider>
        </MantineProvider>
    </>
)
