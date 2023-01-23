import { PoseInterface } from './poses';

export interface RecordingInterface {
    id?: number;
    unique_id: string;
    creatorslug: string;
    description: string;
    difficulty: string;
    end_timestamp: string;
    file_item: string;
    is_fixed: boolean;
    poses: RecordingPoseInterface[];
    props?: string;
    slug: string;
    start_timestamp: string;
    status: string;
    thumbnail: string;
    title: string;
    is_bought?: boolean;
    length?: string | number;
}

export interface RecordingPoseInterface {
    timestamp: string;
    pose: PoseInterface;
}
