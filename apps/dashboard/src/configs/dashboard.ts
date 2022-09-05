import {
  IconBellRinging,
  IconSettings,
  IconSmartHome,
  IconFiles,
  IconAd,
  IconArchive,
} from "@tabler/icons";

const DASHBOARD_CONFIG = {
  links: [
    { link: "/", label: "Dashboard", icon: IconSmartHome },
    { link: "/assets", label: "Assets", icon: IconFiles },
    { link: "/banners", label: "Banners", icon: IconAd },
    { link: "/projects", label: "Projects", icon: IconArchive },
    { link: "/notifications", label: "Notifications", icon: IconBellRinging },
    { link: "/settings", label: "Settings", icon: IconSettings },
  ],
};

export default DASHBOARD_CONFIG;
