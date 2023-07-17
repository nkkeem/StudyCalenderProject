CREATE TABLE `studycalendar`.`todo` (
                                        `todo_id` INT NOT NULL,
                                        `user_id` VARCHAR(45) NOT NULL,
                                        `content` VARCHAR(45) NOT NULL,
                                        `create_at` DATE NULL,
                                        `date` DATE NOT NULL,
                                        `checked_yn` VARCHAR(45) NOT NULL default "N",
                                        PRIMARY KEY (`id_todo`),
                                        UNIQUE INDEX `id_todo_UNIQUE` (`id_todo` ASC) VISIBLE);

