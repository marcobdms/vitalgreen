-- Marco, sergio --
CREATE DATABASE Crops;

USE Crops;

SHOW TABLES;

DROP DATABASE Crops;

CREATE TABLE Plants(
ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
CommonName VARCHAR(255),
ScientificName VARCHAR(255),
CultivationTime INT,
Characteristics TEXT,
Diseases TEXT
);

SELECT * FROM Plants; 

DROP TABLE Plants;

-- isma --
CREATE TABLE IF NOT EXISTS users (
user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(255) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
password CHAR(64) NOT NULL,
registered datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
last_login datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM users;

CREATE TABLE IF NOT EXISTS Users_Info (
user_id INT NOT NULL,
FirstName VARCHAR(255) NOT NULL,
LastName VARCHAR(255) NOT NULL,
Email VARCHAR(64) NOT NULL UNIQUE,
Birthday date,
PRIMARY KEY (user_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

SELECT * FROM Users_Info;

CREATE TABLE IF NOT EXISTS Prediction (
id_Prediction INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
id_users INT NOT NULL,
title VARCHAR(255) NOT NULL,
nitrogen INT NOT NULL,
phosphorus INT NOT NULL,
potassium INT NOT NULL,
temperature FLOAT NOT NULL,
humidity FLOAT NOT NULL,
ph FLOAT NOT NULL,
rainfall INT NOT NULL,
prediction INT NOT NULL,
FOREIGN KEY (id_users) REFERENCES users(user_id)
);
SELECT * FROM Prediction;
DROP TABLE Prediction;

DROP TABLE User_Diseases;

CREATE TABLE Diseases (
id_Diseases INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Diseases_Name VARCHAR(255),
Treatment TEXT,
INDEX (id_Diseases)
);

CREATE TABLE User_Diseases (
id_Diseases INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
Creation_Date DATE,
File_Name VARCHAR(255),
Disease INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (Disease) REFERENCES Diseases(id_Diseases)
);

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('1', 'Arroz', 'Oryza sativa', 120, 'Planta Anual que se cultiva en campos inundados.', 'manchas foliares y pulgones');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('2', 'Maiz', 'Zea mays', 90, 'Cereal de gran altura con mazrocas comestibles.', 'Roya y gusano cogollero');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('3', 'Guandú', 'Cajanus cajan', 150, 'Arbusto perenne con vainas comestibles.', 'Pudrición de la raíz, pulgones');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('4', 'Mothbean', 'Vigna aconitifolia', 60, 'Legumbre de grano pequeño.', 'Antracnosis, marchitez por Fusarium');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('5', 'Frijol Mungo', 'Vigna radiata', 90, 'Legumbre con granos verdes.', 'Antracnosis, mosca blanca');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('6', 'Frijol Negro', 'Vigna mungo', 100, 'Legumbre de grano negro.', 'Antracnosis, gorgojos');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('7', 'Lenteja', 'Lens culinaris', 120, 'Legumbre pequeña de grano comestible.', 'Roya, mildiú polvoriento');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('8', 'Granada', 'Punica granatum', 365, 'Árbol frutal con frutos jugosos.', 'Manchas foliares, pulgones');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('9', 'Plátano', 'Musa spp.', 270, 'Árbol tropical con frutos amarillos.', 'Sigatoka negra, marchitez por Fusarium');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('10', 'Frijol Kidney', 'Phaseolus vulgaris', 80, 'Legumbre de forma característica.', 'Marchitez bacteriana, antracnosis');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('11', 'Garbanzo', 'Cicer arietinum', 90, 'Legumbre de grano comestible.', 'Pudrición de la raíz, mildiú polvoriento');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('12', 'Mango', 'Mangifera indica', 120, 'Árbol frutal con frutos dulces.', 'Oidio, cochinilla');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('13', 'Uva', 'Vitis vinifera', 70, 'Planta trepadora de fruta dulce.', 'Mildiu, podredumbre de las raices');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('14', 'Sandía', 'Citrullus lanatus', 100, 'Fruta grande rica en agua y sales.', 'Mildiu, oidio de las cucurbitaceas');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('15', 'Melón', 'Cucumis melo', 90, 'Fruta grande jugosa, aromática y dulce.', 'Fusariosis, pulgón del melón');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('16', 'Manzana', 'Malus domestica', 365, 'Árbol caucifolio de fruta dulce.', 'Fuego bacteriano, moteado del manzano');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('17', 'Naranja', 'Citrus sinensis', 365, 'Árbol con fruta cítrica y anaranjado.', 'Antracnosis, ácaros');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('18', 'Papaya', 'Carica papaya', 240, 'Árbol de fruta tropical y dulce.', 'Mancha anular, pudrición de la raíz');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('19', 'Coco', 'Cocos nucifera', 240, 'Árbol tropical con fruta rica en fibra.', 'Amarillamiento letal, ácaro del coco');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('20', 'Algodón', 'Gossypium', 180, 'Planta textil de fibra suave.', 'Marchitamiento fúngico, bemisa tabaci');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('21', 'Yute', 'Corchorus capsularis', 120, 'Planta textil de fibra resistente y duradera.', 'Manchas marrones, orugas');

INSERT INTO Plants (ID, CommonName, ScientificName, CultivationTime, Characteristics, Diseases)
VALUES ('22', 'Café', 'Coffea', 334, 'Planta tropical de la que se obtienen granos de café.', 'Roya, barrenadores del tallo');

#configurar
ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'root';
#ejemplo
INSERT INTO Prediction (id_Prediction, id_users, nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall, prediction)
VALUES ('22', 'Café', 'Coffea', 334, 'Planta tropical de la que se obtienen granos de café.', 'Roya, barrenadores del tallo');

