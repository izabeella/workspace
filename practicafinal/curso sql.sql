--
-- Base de datos: `cursosql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(8) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `PRIMERAPELLIDO` varchar(30) NOT NULL,
  `SEGUNDOAPELLIDO` varchar(30) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `LOGINNAME` varchar(30) NOT NULL,
  `PWD` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(8) NOT NULL AUTO_INCREMENT;