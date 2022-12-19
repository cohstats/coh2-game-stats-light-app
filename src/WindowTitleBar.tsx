import { Header, createStyles, Box, Group } from "@mantine/core"
import { appWindow } from "@tauri-apps/api/window"
import { Link, useLocation } from "react-router-dom"
import logo from "./assets/logo/32x32.png"
import { Routes } from "./Router"

export interface WindowTitleBarProps {
    children?: React.ReactNode
}

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({
            variant: "filled",
            color: theme.primaryColor,
        }).background,
    },
    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: "filled",
                    color: theme.primaryColor,
                }).background!,
                0.1
            ),
        },
    },
}))

export const WindowTitleBar: React.FC<WindowTitleBarProps> = ({ children }) => {
    const { classes } = useStyles()
    const location = useLocation()
    return (
        <>
            <Header
                height={35}
                className={classes.header}
                data-tauri-drag-region
            >
                <Group data-tauri-drag-region position="apart" pl="xs">
                    <Group data-tauri-drag-region spacing={0}>
                        <img data-tauri-drag-region src={logo} width={20} />
                        <Link to={Routes.GAME} className={classes.link}>
                            Game
                        </Link>
                        <Link to={Routes.SETTINGS} className={classes.link}>
                            Settings
                        </Link>
                        <Link to={Routes.ABOUT} className={classes.link}>
                            About
                        </Link>
                    </Group>
                    <Group data-tauri-drag-region spacing={0}>
                        <a
                            onClick={() => appWindow.minimize()}
                            className={classes.link}
                        >
                            ─
                        </a>
                        <a
                            onClick={() => appWindow.toggleMaximize()}
                            className={classes.link}
                        >
                            ☐
                        </a>
                        <a
                            onClick={() => appWindow.close()}
                            className={classes.link}
                        >
                            X
                        </a>
                    </Group>
                </Group>
            </Header>
            {location.pathname === Routes.ABOUT ? "true" : "false"}
            <Box>{children}</Box>
        </>
    )
}
