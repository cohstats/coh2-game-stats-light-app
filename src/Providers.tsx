import { MantineProvider } from "@mantine/core"
import { GameDataProvider } from "./GameDataProvider/GameDataProvider"

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
