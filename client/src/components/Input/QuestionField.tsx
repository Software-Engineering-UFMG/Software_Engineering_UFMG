import { Box, Typography } from "@mui/material";
import React from "react";

export type QuestionProps = {
    id: string;
    label: string;
    type: "date" | "textarea" | "radio" | "checkbox";
    options?: { value: string; label: string }[];
    value: any;
    onChange: (id: string, value: any) => void;
};

export const QuestionField: React.FC<QuestionProps> = ({
    id, label, type, options, value, onChange
}) => {
    switch (type) {
        case "date":
            return (
                <Box className="mb-4">
                    <Typography>{label}</Typography>
                    <input
                        type="date"
                        id={id}
                        value={value || ""}
                        onChange={e => onChange(id, e.target.value)}
                        className="border rounded p-2 w-full"
                    />
                </Box>
            );
        case "textarea":
            return (
                <Box className="mb-4">
                    <Typography>{label}</Typography>
                    <textarea
                        id={id}
                        rows={4}
                        value={value || ""}
                        onChange={e => onChange(id, e.target.value)}
                        placeholder="Digite os critérios clínicos"
                        className="border rounded p-2 w-full"
                    />
                </Box>
            );
        case "radio":
            return (
                <Box className="mb-4">
                    <Typography>{label}</Typography>
                    {options!.map(opt => (
                        <label key={opt.value} className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name={id}
                                value={opt.value}
                                checked={value === opt.value}
                                onChange={() => onChange(id, opt.value)}
                                className="mr-1"
                            />
                            {opt.label}
                        </label>
                    ))}
                </Box>
            );
        case "checkbox":
            return (
                <Box className="mb-4">
                    <Typography>{label}</Typography>
                    {options!.map(opt => {
                        const checked: boolean = Array.isArray(value) && value.includes(opt.value);
                        return (
                            <label key={opt.value} className="inline-flex items-center mr-4">
                                <input
                                    type="checkbox"
                                    value={opt.value}
                                    checked={checked}
                                    onChange={() => {
                                        const next = checked
                                            ? value.filter((v: string) => v !== opt.value)
                                            : [...(value || []), opt.value];
                                        onChange(id, next);
                                    }}
                                    className="mr-1"
                                />
                                {opt.label}
                            </label>
                        );
                    })}
                </Box>
            );
        default:
            return null;
    }
};