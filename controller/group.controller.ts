import { Request, Response, NextFunction } from "express";
import groupSchema from "../schema/groupSchema";

const getGroups = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const groups = await groupSchema.find();
    res.json(groups);
  } catch (error) {
    next(error);
  }
};

const getOneGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const foundedGroup = await groupSchema.findOne({ group_id: id });
    if (!foundedGroup) {
      return res.status(404).json({
        message: "Group not found",
      });
    }
    res.json(foundedGroup);
  } catch (err) {
    next(err);
  }
};

const addGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const {
      group_id,
      group_name,
      group_major,
      lesson_time,
      teacher_name,
      teacher_phone_num,
      teacher_img,
    } = req.body;

    const foundGroupName = await groupSchema.findOne({
      group_name: group_name,
    });
    if (foundGroupName) {
      return res.json({
        message: "group_id already exists!",
      });
    } else {
      await groupSchema.create({
        group_id,
        group_name,
        group_major,
        lesson_time,
        teacher_name,
        teacher_phone_num,
        teacher_img,
      });

      res.json({
        message: "Group added successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const {id } = req.params;
    const {
      group_name,
      group_major,
      lesson_time,
      teacher_name,
      teacher_phone_num,
      teacher_img,
    } = req.body;

    const foundGroup = await groupSchema.findOne({ _id: id });
    if (!foundGroup) {
      return res.json({
        message: "Group not found!",
      });
    }
    const updatedGroup = await groupSchema.findOneAndUpdate(
      { id },
      {
        group_name,
        group_major,
        lesson_time,
        teacher_name,
        teacher_phone_num,
        teacher_img,
      },
      { new: true }
    );

    res.json({
      message: "Group updated successfully",
      updatedGroup,
    });
  } catch (error) {
    next(error);
  }
};

const deleteGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { id } = req.params;

    const foundGroup = await groupSchema.findOne({ _id: id });
    if (!foundGroup) {
      return res.json({
        message: "Group not found!",
      });
    }
    await groupSchema.deleteOne({ _id: foundGroup.id });
    res.json({
      message: "Group deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export { getGroups, getOneGroup, addGroup, updateGroup, deleteGroup };