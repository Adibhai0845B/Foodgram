"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const influenceLeaderboardData = [
  { username: "@stephcurry", influenceScore: 99 },
  { username: "@kingjames", influenceScore: 98 },
  { username: "@elonmusk", influenceScore: 97 },
  { username: "@arianagrande", influenceScore: 96 },
  { username: "@taylorswift", influenceScore: 95 },
  { username: "@therock", influenceScore: 94 },
  { username: "@billgates", influenceScore: 93 },
  { username: "@beyonce", influenceScore: 92 },
  { username: "@justinbieber", influenceScore: 91 },
  { username: "@kanyewest", influenceScore: 90 },
]

const LeaderboardScreen = () => {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Leaderboard</h1>
      <Tabs defaultValue="notes" className="w-full">
        <TabsList>
          <TabsTrigger value="influence">Influence</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="influence">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Influence Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {influenceLeaderboardData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.influenceScore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="notes">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notesLeaderboardData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        {user.avatar ? (
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.username} />
                        ) : (
                          <AvatarFallback>{user.initials}</AvatarFallback>
                        )}
                      </Avatar>
                      <span>{user.username}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.noteCount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default LeaderboardScreen

const notesLeaderboardData = [
  { username: "@hairsnags", noteCount: 6, avatar: "/placeholder.svg?height=40&width=40" },
  { username: "@shubhradash", noteCount: 5, avatar: "/placeholder.svg?height=40&width=40" },
  { username: "@ceceatstheworld", noteCount: 4, avatar: "/placeholder.svg?height=40&width=40" },
  { username: "@bobbypacific", noteCount: 4, avatar: "/placeholder.svg?height=40&width=40" },
  { username: "@colelambo", noteCount: 3, avatar: "/placeholder.svg?height=40&width=40" },
  { username: "@saamia", noteCount: 3, avatar: "/placeholder.svg?height=40&width=40" },
  { username: "@mits_to_keep_ya_warm", noteCount: 3, avatar: "/placeholder.svg?height=40&width=40" },
  { username: "@AadyaJindal", noteCount: 3, avatar: "/placeholder.svg?height=40&width=40" },
  { username: "@thesidkumar", noteCount: 2, avatar: "", initials: "SK" },
]
