import { IModel } from '../../core/IModel';
export class TourProgram implements IModel {
    id: number;
    tourProgramId: number;
    description: string;
    day: string;
    isdeleted: boolean;
    tourId: number;
}
