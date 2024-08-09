import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoTimer } from "react-icons/io5";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsStopwatch } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the Menu component inside Sidepanel for simplicity
function Menu({ title, icon, isActive, onClick }) {
  return (
    <Flex
      alignItems="center"
      px={10}
      bg={isActive ? "#293241" : "purple.600"}
      color={"white"}
      _hover={{ bg: "#293241" }}
      cursor="pointer"
      borderRadius={5}
      onClick={onClick}
      mb={5}
    >
      <Icon as={icon} boxSize={20} mr={3} />
      <Text>{title}</Text>
    </Flex>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

function Sidepanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  let menus = [
    { title: "Focus Sessions", icon: IoTimer, link: "/" },
    { title: "Timer", icon: MdOutlineHourglassEmpty, link: "/timer" },
    { title: "Alarm", icon: IoMdNotificationsOutline, link: "/alarm" },
    { title: "Stopwatch", icon: BsStopwatch, link: "/stop-watch" },
    { title: "World Clock", icon: TbWorld, link: "/world-clock" },
  ];

  function handleClick(index, link) {
    setActiveIndex(index);
    navigate(link);
  }

  return (
    <Box
      w="200px"
      h="100vh"
      bg="#202020"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p={5}
    >
      <Box>
        {menus.map(({ title, icon, link }, index) => (
          <Menu
            key={title}
            title={title}
            icon={icon}
            isActive={index == activeIndex}
            onClick={() => handleClick(index, link)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Sidepanel;
