import React from "react";
import {
  ExternalLink,
  Award,
  Calendar,
  Building,
  Star,
  Trophy,
  Shield,
  Zap,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CertificationItemProps } from "@/types/certification";
import { cn } from "@/lib/utils";

const CertificationItem4 = ({
  id,
  name,
  organization = "unknown",
  date = "",
  verifyLink,
  className = "",
}: CertificationItemProps) => {
  return (
    <div className={cn("group relative", className)}>
      {/* 背景のぼかし効果 - ライト/ダーク対応 */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-60 blur-xl transition-all duration-500 group-hover:opacity-80 group-hover:blur-2xl dark:from-slate-800/20 dark:via-blue-900/20 dark:to-purple-900/20 dark:opacity-70 dark:group-hover:opacity-90" />

      <Card className="hover:shadow-3xl relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 shadow-2xl backdrop-blur-lg transition-all duration-300 group-hover:bg-white/85 dark:border-slate-700/50 dark:bg-slate-900/70 dark:group-hover:bg-slate-900/75">
        {/* グラデーション装飾 */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500" />

        <CardContent className="space-y-4 p-6">
          {/* ヘッダー */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="rounded-xl border border-blue-200/50 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 shadow-lg backdrop-blur-sm dark:border-cyan-400/30 dark:from-cyan-500/20 dark:to-blue-500/20">
                  <Award className="h-6 w-6 text-blue-700 dark:text-cyan-400" />
                </div>
                <div className="absolute -right-1 -top-1">
                  <Zap className="h-4 w-4 text-amber-500 drop-shadow-sm dark:text-yellow-400" />
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 w-8 rounded-full border border-blue-200/50 bg-blue-50/80 p-0 text-blue-700 backdrop-blur-sm hover:bg-blue-100/80 hover:text-blue-800 dark:border-slate-600/50 dark:bg-slate-800/80 dark:text-cyan-400 dark:hover:bg-slate-700/80 dark:hover:text-cyan-300"
            >
              <a href={verifyLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* メイン情報 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-800 dark:text-white dark:group-hover:text-cyan-300">
              {name}
            </h3>

            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Building2 className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
              <span className="text-sm font-medium">{organization}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4 text-purple-600 dark:text-blue-400" />
              <span className="text-sm">{date}</span>
            </div>
          </div>

          {/* アクションボタン */}
          <Button
            asChild
            className="w-full border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-500 dark:hover:to-blue-500"
          >
            <a href={verifyLink} target="_blank" rel="noopener noreferrer">
              認定証を確認
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificationItem4;
